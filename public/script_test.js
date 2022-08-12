const testerArray = ['affenpinscher', 'african',
  'airedale',
  'akita',
  'appenzeller',
  'australian',
  'basenji',
  'beagle',
  'bluetick',
  'borzoi',
  'bouvier',
  'boxer',
  'brabancon',
  'briard',
  'buhund',
  'bulldog',
  'bullterrier',
  'cattledog',
  'chihuahua',
  'chow',
  'clumber',
  'cockapoo',
  'collie',
  'coonhound',
  'corgi',
  'cotondetulear',
  'dachshund',
  'dalmatian',
  'dane',
  'deerhound',
  'dhole',
  'dingo',
  'doberman',
  'elkhound',
  'entlebucher',
  'eskimo',
  'finnish',
  'frise',
  'germanshepherd',
  'greyhound',
  'groenendael',
  'havanese',
  'hound',
  'husky',
  'keeshond',
  'kelpie',
  'komondor',
  'kuvasz',
  'labradoodle',
  'labrador',
  'leonberg',
  'lhasa',
  'malamute',
  'malinois',
  'maltese',
  'mastiff',
  'mexicanhairless',
  'mix',
  'mountain',
  'newfoundland',
  'otterhound',
  'ovcharka',
  'papillon',
  'pekinese',
  'pembroke',
  'pinscher',
  'pitbull',
  'pointer',
  'pomeranian',
  'poodle',
  'pug',
  'puggle',
  'pyrenees',
  'redbone',
  'retriever',
  'ridgeback',
  'rottweiler',
  'saluki',
  'samoyed',
  'schipperke',
  'schnauzer',
  'setter',
  'sharpei',
  'sheepdog',
  'shiba',
  'shihtzu',
  'spaniel',
  'springer',
  'stbernard',
  'terrier',
  'tervuren',
  'vizsla',
  'waterdog',
  'weimaraner',
  'whippet',
  'wolfhound'
];

const searchInput = document.querySelector('.search');
const autoComContainer = document.querySelector('.autocom-box');


searchInput.addEventListener('keyup', (e) => {
  // console.log(e.target.value);
  const value = e.target.value;

  if (value !== "") {
    const matches = testerArray.filter((ele) => {
      return ele.startsWith(value.toLowerCase());
    });
    // console.log(matches);
    const autoComResults = matches.map((ele) => {
      return `<li>${ele}</li>`;
    });
    autoComContainer.innerHTML = autoComResults.join('') ;
  }else{
    autoComContainer.innerHTML = "" ;
  }
});