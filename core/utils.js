// Prototypes

String.prototype.interpolate = function (properties) {
  
  let string = String(this);
  const nbProps = string.match(/{{([^}]*)}}/g).length;

  for (let i = 0; i < nbProps; i++) {
    let childTextElement = string.match(/{{([^}]*)}}/);
    let text = childTextElement[1].trim();

    let propExist = properties.props.prop_access(text);
    if (propExist) string = string.replace(string.match(/{{([^}]*)}}/)[0], properties.props[text]);
  }

  return string;
};

Object.prototype.isClass = function () {
  return typeof this === "function" && /^class\s/.test(Function.prototype.toString.call(this));
};

// Helpers

export function type_check_v1(variable, type) {
  if (variable === null && type === "null") return true;
  if (Array.isArray(variable) && type === "array") return true;
  if (Array.isArray(variable) && type === "object") return false;
  if (variable === null && type === "object") return false;
  return typeof variable === type;
}

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

 Object.prototype.prop_access = function prop_access(path) {

  let obj = this;

  if (path === null || path === "")
    return false;

  if (obj === null)
    return false;

  let pathArray = path.split('.');
  let newPath = "";

  for (let i = 0; i < pathArray.length; i++) {
    obj = obj[pathArray[i]];

    if (i !== 0)
      newPath += "." + pathArray[i];
    else
      newPath = pathArray[i];

    if (obj === undefined)
      return false;
  }
  return true;
} 
