import json
import yaml

from pathlib import Path

def load_dir(path):
    items = []
    for file in sorted(path.iterdir()):
        if file.suffix == ".yml":
            item = yaml.safe_load(open(file, encoding='utf8'))
            if isinstance(item, list):
                items += item
            else:
                items.append(item)
    return items

trains_path = Path("trains")
stations_path = Path("stations")

result = {
    "trains": load_dir(trains_path),
    "stations": load_dir(stations_path)
}
outfile = Path('../frontend/src/assets/data.json')
outfile.parent.mkdir(exist_ok=True)
json.dump(result, open(outfile, 'w'), indent=2)