const [uploadSetting, setUploadSetting] = useState({
    backgroundColor: "#FFFFFC",
    typeFace: "Open Sans",
    fontSize: 16,
    lineSpace: 7.5,
    letterSpace: 150
  });


  function handleBGColor(e) {
    setUploadSetting({
      ...uploadSetting,
      backgroundColor: e.target.value
    })
    console.log(uploadSetting)
  };

  function handleTypeFace(e) {
    setUploadSetting({
      ...uploadSetting,
      typeFace: e.target.value
    })
    console.log(uploadSetting)
  };

  function handleFontSize(e) {
    setUploadSetting({
      ...uploadSetting,
      fontSize: e.target.value
    })
    console.log(uploadSetting)
  };

  function handleLineSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      lineSpace: e.target.value
    })
    console.log(uploadSetting)
  };

  function handleLetterSpace(e) {
    setUploadSetting({
      ...uploadSetting,
      letterSpace: e.target.value
    })
    console.log(uploadSetting)
  };

  function handleClear() {
    
    setUploadSetting({
      ...uploadSetting,
      backgroundColor: "#FFFFFC",
      typeFace: "Open Sans",
      fontSize: 16,
      lineSpace: 9,
      letterSpace: 150
    })

    console.log(uploadSetting)
  }