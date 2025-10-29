# text generation using random 
import random  

prompts = ["Hello AI,", "Today I want to", "Let's learn about"]  
continuations = [" generate text.", " understand AI.", " explore machine learning."]  

for i in range(3):  # texts
    prompt = random.choice(prompts)
    continuation = random.choice(continuations) 
    print(prompt + continuation)  
