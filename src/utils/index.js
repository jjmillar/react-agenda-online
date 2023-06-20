function importAllImages() {
    const images = [];
    import.meta("./../assets/campaings/", false, /\.(png|jpe?g|svg)$/).keys().forEach((key) => {images.push(require(`./your-folder/${key}`));
    });
    return images;
  }

export default importAllImages;