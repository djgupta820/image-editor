import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [blr, setBlur] = useState(0);
  const [contrast, setContrast] = useState(144);
  const [bright, setBright] = useState(1);
  const [gray, setGray] = useState(0);
  const [hue, setHue] = useState(0);
  const [invert, setInvert] = useState(0);
  const [saturate, setSaturate] = useState(150);
  const [sepia, setSepia] = useState(0);
  const [shadow, setShadow] = useState(0);

  let fltr = ` blur(${blr}px) contrast(${contrast}%) brightness(${bright}) grayscale(${gray}%) hue-rotate(${hue}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%) drop-shadow(${shadow}px ${shadow}px ${shadow}px black)`;
  const styles = {
    Width: "100%",
    Height: "100%",
    maxWidth: "300px",
    filter: fltr,
  };

  useEffect(() => {
    document.title = "Image Editor";
  }, [styles]);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const handleBlurChange = (e) => {
    setBlur(e.target.value);
  };

  const handleBrightChange = (e) => {
    setBright(e.target.value);
  };

  const handleContrastChange = (e) => {
    setContrast(e.target.value);
  };

  const handleGrayChange = (e) => {
    setGray(e.target.value);
  };

  const handleHueChange = (e) => {
    setHue(e.target.value);
  };

  const handleInvertChange = (e) => {
    setInvert(e.target.value);
  };

  const handleSaturateChange = (e) => {
    setSaturate(e.target.value);
  };

  const handleSepiaChange = (e) => {
    setSepia(e.target.value);
  };

  const handleShadowChange = (e) => {
    setShadow(e.target.value);
  };

  const handleSave = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Apply filters to the context
      ctx.filter = fltr;

      // Draw the image onto the canvas with applied filters
      ctx.drawImage(img, 0, 0, img.width, img.height);

      // Convert the canvas content to a data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create a temporary anchor element to trigger download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataURL;
      downloadLink.download = "edited_image.png";

      // Trigger the download
      downloadLink.click();
    };

    // Set the source of the image to the uploaded image file
    img.src = URL.createObjectURL(image);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Image Editor</h1>

      <div className="uploader">
        <label htmlFor="image">
          Upload Image <i className="fa-solid fa-camera"></i>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      <div className="frame">
        <div className="display">
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              style={styles}
            />
          ) : (
            "No Image Uploaded!"
          )}
          <br />
          {image ? (
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          ) : (
            ""
          )}
        </div>

        {image ? (
          <div className="editor">
            {/* <h4>Edit Here</h4> */}
            <div className="img-editor">
              <h4>Blur Editor</h4>
              <input
                type="range"
                min={0}
                max={9}
                step={0.5}
                onChange={(e) => handleBlurChange(e)}
              />{" "}
              {blr} px
            </div>

            <div className="img-editor">
              <h4> Constrast Editor</h4>
              <input
                type="range"
                min={0}
                max={400}
                step={10}
                onChange={(e) => handleContrastChange(e)}
              />{" "}
              {contrast} %
            </div>

            <div className="img-editor">
              <h4> Brightness Editor</h4>
              <input
                type="range"
                min={0}
                max={2}
                step={0.05}
                onChange={(e) => handleBrightChange(e)}
              />{" "}
              {bright}
            </div>

            <div className="img-editor">
              <h4> Grayscale Editor</h4>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                onChange={(e) => handleGrayChange(e)}
              />{" "}
              {gray} %
            </div>

            <div className="img-editor">
              <h4> Hue-rotate Editor</h4>
              <input
                type="range"
                min={0}
                max={360}
                step={10}
                onChange={(e) => handleHueChange(e)}
              />{" "}
              {hue} deg
            </div>

            <div className="img-editor">
              <h4> Invert Editor</h4>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                onChange={(e) => handleInvertChange(e)}
              />{" "}
              {invert} %
            </div>

            <div className="img-editor">
              <h4> Saturate Editor</h4>
              <input
                type="range"
                min={0}
                max={400}
                step={5}
                onChange={(e) => handleSaturateChange(e)}
              />{" "}
              {saturate} %
            </div>

            <div className="img-editor">
              <h4> Sepia Editor</h4>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                onChange={(e) => handleSepiaChange(e)}
              />{" "}
              {sepia} %
            </div>

            <div className="img-editor">
              <h4> Shadow Editor</h4>
              <input
                type="range"
                min={0}
                max={50}
                step={1}
                onChange={(e) => handleShadowChange(e)}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
