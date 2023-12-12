


export const getImageDataUrl = async (imageObject) => {
    if (!imageObject || imageObject.type !== 'Buffer' || !imageObject.data) {
      return null;
    }

    const uint8Array = new Uint8Array(imageObject.data);
    const blob = new Blob([uint8Array], { type: 'image/jpeg' });

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };