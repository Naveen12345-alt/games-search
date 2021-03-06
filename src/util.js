//MEdia resize

export const smallImage = (imagePath, size) => {
  if (imagePath === null) {
    return 'https://i.stack.imgur.com/EMMpP.png';
  }
  let image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);
  return image;
};
