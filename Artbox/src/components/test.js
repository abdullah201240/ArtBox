import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";
const image = "/Users/abdullahalsakib/Downloads/Interview/art/server/test.jpeg"
const formData = {
    image : image,
  prompt: "Lighthouse on a cliff overlooking the ocean",
  model : "sd3-turbo",
mode  : "text-to-image",

  output_format: "jpeg"
};

const response = await axios.postForm(
  `https://api.stability.ai/v2beta/stable-image/generate/sd3`,
  axios.toFormData(formData, new FormData()),
  {
    validateStatus: undefined,
    responseType: "arraybuffer",
    headers: { 
      Authorization: `Bearer sk-jwiaRmIxOjZkFVNgp3qmW6M383gsZh7fHZZzhbYZpypKbGPi`, 
      Accept: "image/*" 
    },
  },
);

if(response.status === 200) {
  fs.writeFileSync("./lighthouse.jpeg", Buffer.from(response.data));
} else {
  throw new Error(`${response.status}: ${response.data.toString()}`);
}