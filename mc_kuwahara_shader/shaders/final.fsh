#version 150

uniform float viewWidth;
uniform float viewHeight;
uniform sampler2D colortex0;

in vec2 texCoord;
out vec4 fragColor;

// Tune these to trade quality vs performance:
//   RADIUS 36, STEP 1 → 5476 samples/pixel (original, ~9fps)
//   RADIUS 36, STEP 3 → 676  samples/pixel (~8x faster)
//   RADIUS 36, STEP 4 → 400  samples/pixel (~14x faster)
//   RADIUS 16, STEP 2 → 324  samples/pixel (smaller brush, fast)
#define RADIUS 36
#define STEP 1

vec3 kuwahara_region(vec2 uv, vec2 ts, int x0, int x1, int y0, int y1, out float outVariance) {
    vec3 colorSum = vec3(0.0);
    float lumaSum = 0.0;
    float lumaSqSum = 0.0;
    float count = 0.0;

    for (int i = x0; i <= x1; i += STEP) {
        for (int j = y0; j <= y1; j += STEP) {
            vec3 c = texture(colortex0, uv + vec2(float(i), float(j)) * ts).rgb;
            float luma = dot(c, vec3(0.299, 0.587, 0.114));
            colorSum  += c;
            lumaSum   += luma;
            lumaSqSum += luma * luma;
            count     += 1.0;
        }
    }

    vec3  mean     = colorSum / count;
    float meanLuma = lumaSum  / count;
    float variance = (lumaSqSum / count) - (meanLuma * meanLuma);
    outVariance = variance * variance; // square for harder selection
    return mean;
}

void main() {
    vec2 ts = vec2(1.0 / viewWidth, 1.0 / viewHeight);

    float v_tr, v_tl, v_bl, v_br;
    vec3 mean_tr = kuwahara_region(texCoord, ts,       0, RADIUS,       0, RADIUS, v_tr);
    vec3 mean_tl = kuwahara_region(texCoord, ts, -RADIUS,      0,       0, RADIUS, v_tl);
    vec3 mean_bl = kuwahara_region(texCoord, ts, -RADIUS,      0, -RADIUS,      0, v_bl);
    vec3 mean_br = kuwahara_region(texCoord, ts,       0, RADIUS, -RADIUS,      0, v_br);

    vec3  finalColor = mean_tr;
    float minVar     = v_tr;

    if (v_tl < minVar) { minVar = v_tl; finalColor = mean_tl; }
    if (v_bl < minVar) { minVar = v_bl; finalColor = mean_bl; }
    if (v_br < minVar) { minVar = v_br; finalColor = mean_br; }

    fragColor = vec4(finalColor, 1.0);
}
