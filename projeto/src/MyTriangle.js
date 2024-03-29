/**
 * MyTriangle
 * @constructor
 */
class MyTriangle extends CGFobject
{
    constructor(scene, minS, maxS, minT, maxT)
    {
        super(scene);
        this.minS = minS || 0.0;
        this.minT = minT || 0.0;
        this.maxS = maxS || 1.0;
        this.maxT = maxT || 1.0;
        this.initBuffers();
    };

    initBuffers()
    {
        this.vertices = [
            0, 0, 0,
            1, 0, 0,
            0, 1, 0,
        ];

        this.indices = [
            0, 1, 2,
        ];

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];

        this.texCoords = [
            this.minS,this.maxT,
            this.maxS,this.maxT,
            this.minS,this.minT,
            this.maxS,this.minT
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    };
};
