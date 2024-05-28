from flask import Flask, request, jsonify, send_file
from diffusers import StableDiffusionPipeline
import torch
from PIL import Image
import io

app = Flask(__name__)

# Load the model
model = StableDiffusionPipeline.from_pretrained("CompVis/stable-diffusion-v1-4", low_cpu_mem_usage=True)
model = model.to("mps")

@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({"error": "Invalid input"}), 400

    text = data['text']
    with torch.no_grad():
        image = model(text).images[0]
    
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)
    
    return send_file(img_byte_arr, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
