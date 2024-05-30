import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import { Request, Response } from 'express';

const Signup = async (req: Request, res: Response) => {
    const formData = {
        prompt: "Lighthouse on a cliff overlooking the ocean",
        output_format: "jpeg"
      };
    
      try {
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
          res.status(200).send("Image generated and saved successfully.");
        } else {
          throw new Error(`${response.status}: ${response.data.toString()}`);
        }
      } catch (error) {
        res.status(500).send(`Error generating image: ${error.message}`);
      }
};

export { Signup };
