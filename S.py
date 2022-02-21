import base64
inp = int(input('''base64[1]\n base32[2]\n'''))
if inp == 1:
    file = input("enter a file")
    f = open(file)
    sample_string = f.read()
    sample_string_bytes = sample_string.encode("ascii")
    base64_bytes = base64.b64encode(sample_string_bytes)
    base64_string = base64_bytes.decode("ascii")
    print(f"Encoded string: {base64_string}")

elif inp == 2:
    file = input("enter a file")
    f = open(file)
    sample_string = f.read()
    sample_string_bytes = sample_string.encode("ascii")
    base64_bytes = base64.b64encode(sample_string_bytes)
    base64_string = base64_bytes.decode("ascii")
    print(f"Encoded string: {base64_string}")
else:
    print("wrong input")
