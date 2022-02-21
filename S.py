import base64
import zlib


inp = int(input('''base64[1]\nbase32[2]\nzlib[3]\nmarshal[4]\n'''))

if inp == 1:
    file = input("enter a file to encode into base64\n")
    f = open(file)
    sample_string = f.read()
    sample_string_bytes = sample_string.encode("ascii")
    base64_bytes = base64.b64encode(sample_string_bytes)
    base64_string = base64_bytes.decode("ascii")
    print(f"Encoded string: {base64_string}")

elif inp == 2:
    file = input("enter a file to encode into base32\n")
    f = open(file)
    sample_string = f.read()
    sample_string_bytes = sample_string.encode("ascii")
    base32_bytes = base64.b32encode(sample_string_bytes)
    base32_string = base32_bytes.decode("ascii")
    print(f"Encoded string: {base32_string}")

elif inp == 3:
    file = input("enter a file to encode into zlib\n")
    f = open(file)
    sample_string = f.read()
    zlib_string = zlib.compress(sample_string.encode())
    print(f"Encoded string: {zlib_string}")

elif inp == 4:

elif inp == 3:

elif inp == 3:

elif inp == 3:
else:
    print("wrong input")
