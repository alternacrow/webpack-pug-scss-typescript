export default class Modules {
  public init(modules: typeof Module[]) {
    const elements = document.querySelectorAll('[data-module]');

    elements.forEach(element => {
      const moduleNames = element
        .getAttribute('data-module')
        ?.trim()
        .split(/\s+/);

      modules.forEach(module => {
        if (moduleNames?.includes(module.moduleName)) {
          new module(element as HTMLElement).init();
        }
      });
    });
  }
}

export class Module {
  static moduleName: string;

  constructor(protected el: HTMLElement) {}

  public init() {
    console.log(`initialize module = ${Module.moduleName} =`);
  }
}
