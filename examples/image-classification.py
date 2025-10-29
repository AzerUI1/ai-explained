# dummy image classification
import random  

images = ["cat.jpg", "dog.jpg", "car.jpg"] 
labels = ["Cat", "Dog", "Car"]  

for img in images: 
    predicted = random.choice(labels)  
    print(f"Image {img} is classified as {predicted}")  
