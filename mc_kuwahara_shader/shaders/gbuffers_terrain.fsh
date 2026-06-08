#version 150

/* DRAWBUFFERS:0 */

uniform sampler2D gtexture;
uniform sampler2D lightmap;

in vec2 texCoord;
in vec4 tintColor;
in vec2 lightCoord;

out vec4 fragColor;

void main() {
    vec4 color = texture(gtexture, texCoord);
    if (color.a < 0.1) discard;
    color *= tintColor;
    color.rgb *= texture(lightmap, lightCoord).rgb;
    fragColor = color;
}
