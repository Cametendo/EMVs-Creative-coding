#version 150

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 chunkOffset;

in vec3 vaPosition;
in vec4 vaColor;
in vec2 vaUV0;
in ivec2 vaUV2;

out vec2 texCoord;
out vec4 tintColor;
out vec2 lightCoord;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vaPosition + chunkOffset, 1.0);
    texCoord = vaUV0;
    tintColor = vaColor;
    lightCoord = vaUV2 / 256.0;
}
