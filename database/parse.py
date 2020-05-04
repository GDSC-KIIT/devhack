import csv, json

d = []

with open('registrations.csv', 'r') as f:
    reader = csv.DictReader(f)

    for r in reader:
        d.append(dict(r))


json_file = open("registrations.json", 'w')
json_file.write(json.dumps(d, indent=2))