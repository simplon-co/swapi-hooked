import slugify from 'slug';

function getImageFromSWVG(type = 'characters', id) {
  const rootUrl = 'https://starwars-visualguide.com/assets/img';
  const uri = type === 'people' ? 'characters' : type;
  return `${rootUrl}/${uri}/${id}.jpg`;
}

export function addMoreInfos(arr, endpoint) {
  const extractId = (url) => {
    const id = url.split('/')[5];
    return id;
  };
  const moreInfos = arr.map((elem) => {
    const id = extractId(elem.url);
    const img_src = getImageFromSWVG(endpoint, id);
    const slug = slugify(elem.title ? elem.title : elem.name, { lower: true });
    return { ...elem, id, slug, img_src };
  });

  return moreInfos;
}
