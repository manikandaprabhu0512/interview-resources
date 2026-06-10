import abstractfactory from "./abstract-factory";
import abstraction from "./abstraction";
import bridge from "./bridge";
import builderDirector from "./builder-director";
import command from "./command";
import composite from "./composite";
import cor from "./cor";
import dectorator from "./decorator";
import dip from "./dip";
import encapsulation from "./encapsulation";
import facade from "./facade";
import factorymethod from "./factory_method";
import flyweight from "./flyweight";
import inheritance from "./inheritance";
import isp from "./isp";
import iterator from "./iterator";
import lsp from "./lsp";
import mediator from "./mediator";
import memento from "./memento";
import observer from "./observer";
import ocp from "./ocp";
import oops from "./OOPS";
import polymorphism from "./polymorphism";
import prototype from "./prototype";
import proxy from "./proxy";
import simpleBuilder from "./simple-builder";
import simplefactoy from "./simple_factory";
import singleton from "./singleton";
import solid from "./solid";
import srp from "./srp";
import state from "./state";
import stepBuilder from "./step-builder";
import strategy from "./strategy_pattern";
import template from "./template";
import visitor from "./visitor";

const diagrams: Record<string, React.ReactNode> = {
  strategy: strategy,
  "simple-factory": simplefactoy,
  "factory-method": factorymethod,
  "abstract-factory": abstractfactory,
  singleton: singleton,
  observer: observer,
  decorator: dectorator,
  command: command,
  facade: facade,
  composite: composite,
  template: template,
  proxy: proxy,
  chainofresponsibility: cor,
  bridge: bridge,
  "simple-builder": simpleBuilder,
  "builder-director": builderDirector,
  "step-builder": stepBuilder,
  iterator: iterator,
  flyweight: flyweight,
  mediator: mediator,
  state: state,
  prototype: prototype,
  visitor: visitor,
  memento: memento,
  oops: oops,
  abstraction: abstraction,
  encapsulation: encapsulation,
  inheritance: inheritance,
  polymorphism: polymorphism,
  solid: solid,
  srp: srp,
  ocp: ocp,
  lsp: lsp,
  isp: isp,
  dip: dip,
};

export default diagrams;
