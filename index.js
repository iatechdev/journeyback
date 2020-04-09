// importamos los encabezados y configuraciones que tiene el app.js
// arrancamos el express
import app from './app';
async function main(){
  await app.listen(3001);
  console.log('server on port 3001');
};
main();  