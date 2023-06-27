export function withStars(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function () {
        console.log("********************");
        originalMethod.apply(this, arguments);
        console.log("********************");
    };
  
    return descriptor;
}


export function formatPhone(target: any, propertyName: string | symbol) {
    let value = target[propertyName];

    if (typeof value === "number") {
        value = "+" + String(value);
    }
    else if (typeof value === "string") {
        if (!value.startsWith("+")) {
        value = "+" + value;
        }
    }
};

export function logGetter(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const getter = Object.getOwnPropertyDescriptor(target, propertyKey)?.get;
    if (!getter) {
        return;
    }

    descriptor.get = function () {
      const value = getter.call(this);
      console.log(`Getting ${propertyKey} with value ${value}`);
      return value;
    };
}
  
export function logSetter(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const setter = Object.getOwnPropertyDescriptor(target, propertyKey)?.set;
    if (!setter) {
        return;
    }
    descriptor.set = function (value: any) {
        console.log(`Setting ${propertyKey} to ${value}`);
        setter.call(this, value);
    };
  }
  
  
  