// Prototypes

String.prototype.interpolate = function (createObject) {
  console.log("interpolate :");
  console.log(this);
  let string = String(this);

  const lengthToInterpolate = string.match(/{([^}]*)}/g).length;

  for (let i = 0; i < lengthToInterpolate; i++) {
    let childTextElement = string.match(/{([^}]*)}/);
    let childTextElementMatch = createObject.props.prop_access(childTextElement[1]);
    string = string.replace(string.match(/{([^}]*)}/)[0], childTextElementMatch);
  }
  return string;
};

Object.prototype.isClass = () => {
  return typeof this === "function" && /^class\s/.test(Function.prototype.toString.call(this));
};

// Helpers

export function type_check(variable, conf) {
  function type_check_v1(variable, type) {
    if (variable === null && type === "null") return true;
    if (Array.isArray(variable) && type === "array") return true;
    if (Array.isArray(variable) && type === "object") return false;
    if (variable === null && type === "object") return false;
    return typeof variable === type;
  }

  let properties = Object.keys(conf);
  let property = "";
  for (property of properties) {
    if (property === "enum") {
      if (typeof variable === "object") {
        if (!conf.enum.find((element) => JSON.stringify(element) === JSON.stringify(variable))) {
          return false;
        }
      } else {
        if (!conf.enum.find((element) => element === variable)) {
          return false;
        }
      }
    } else if (property === "value") {
      if (typeof variable === "object") {
        if (JSON.stringify(conf.value) !== JSON.stringify(variable)) {
          return false;
        }
      } else {
        if (variable !== conf.value) return false;
      }
    } else if (property === "type") {
      if (!type_check_v1(variable, conf.type)) return false;
    }
  }
  if (conf.properties !== undefined) {
    if (conf.properties[Object.keys(variable)[0]] !== undefined) {
      conf = conf.properties;
      return type_check(variable, conf);
    } else return false;
  }

  return true;
}

export function prop_access(obj, path) {
  if (obj === null) return console.log(`${path} not exist.`);
  if (path === "" || path === null) return obj;

  const splitedPath = path.split(".");
  const pathMemory = [];

  for (let i = 0; i < splitedPath.length; i++) {
    const pathElement = splitedPath[i];
    pathMemory.push(pathElement);

    // ça existe, et on est pas arrivé à la fin du chemin
    if (obj[pathElement] && i !== splitedPath.length - 1) {
      obj = obj[pathElement];
    }

    // ça existe, on est arrivé à la fin du chemin
    else if (obj[pathElement]) {
      return obj[pathElement];
    }

    // pas trouvé, on affiche la mémoire de chemin
    else {
      const erronedPath = pathMemory.join(".");
      return console.log(`${erronedPath} not exist.`);
    }
  }
}
