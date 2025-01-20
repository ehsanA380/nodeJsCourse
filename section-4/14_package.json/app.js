console.log('hi, how are you');
console.log(import.meta);


// sementic versoning
// (major,minor,patch) => e.g (1.2.3);
// "version":"*" => when we add * in package.json file then it install latest version 
// "version":"^1.0.2" => when we add ^ as suffix in package.json file then it install updated version of minor,patch
// "version":"~1.0.2" => when we add ~ as suffix in package.json file then it install updated version of only patch
// "version":"~1.0.2" => when we add ^ as suffix in package.json file then it install updated version of only patch