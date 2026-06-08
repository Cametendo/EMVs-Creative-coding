#version 150

in vec3 vaPosition;
in vec2 vaUV0;

out vec2 texCoord;

void main() {
    gl_Position = vec4(vaPosition.xy * 2.0 - 1.0, 0.0, 1.0);
    texCoord = vaUV0;
}
