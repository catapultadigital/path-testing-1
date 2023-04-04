export type string_info = {
  lower_case: string,
  upper_case: string,
  characters: string[],
  length: number,
  extra_info: Object | undefined
};

export type callback_function = (arg: string) => void;

const to_upper_case = (arg: string) => {
  return arg.toUpperCase();
};

const get_string_info = (arg: string): string_info => {
  return {
    lower_case: arg.toLowerCase(),
    upper_case: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extra_info: {}
  };
};

class StringTools {
  public to_upper_case(arg: string) {
    if (!arg) {
      throw new Error('Invalid argument');
    };
    return to_upper_case(arg);
  };
};

const calc_complexity = (obj: string_info) => {
  return Object.keys(obj.extra_info).length * obj.length;
};

const to_upper_case_with_cb = (arg: string, callback: callback_function) => {
  if (!arg) {
    callback('Invalid argument');
    return;
  };
  callback(`Called function with ${arg}`)
  return arg.toUpperCase();
}

module.exports = {
  to_upper_case,
  get_string_info,
  StringTools,
  calc_complexity,
  to_upper_case_with_cb
};