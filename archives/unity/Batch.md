## 哪些情况会影响Batch？

+ they must share the same material

+ the material must not be instanced (check material name in debug inspector)

+ batching is applied only to meshes containing less than approx 900 vertex attributes in total (check mesh 
properties for some idea about this; for starters turn off normals & tangents to reduce it)

+ the textures must not include alpha

+ scale breaks batching

+ lightmaps break batching

+ multipass shaders break batching

+ layering other objects in between objects trying to batch can break batching

+ if you are instantiating the object in code, you may be instancing the material; try re-applying the material asset
 through .sharedMaterial

+ even within single-pass shaders, some can batch higher vertex attribute counts than others... in particular if you 
use a shader that colors vertices you’ll be adding attributes

+ Currently, only Mesh Renderers and Particle Systems are batched.  This means that skinned meshes, cloth, 
trail renderers and other types of rendering components are not batched.