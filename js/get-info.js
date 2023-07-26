const jsonData = localStorage.getItem("formData");

const dataForm = JSON.parse(jsonData);

for (const key in dataForm) {
    if (dataForm.hasOwnProperty(key)) {
      const value = dataForm[key];
      console.log(key + ":", value);
    }
  }