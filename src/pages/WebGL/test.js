export default (element) => {
  const gl = element.getContext('webgl');
  if (!gl) return false;
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}