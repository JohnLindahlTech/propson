import propson from './propson';
import contract from 'neat-contract';

export default function Propson(sources, dir, isNested){
  contract('sources', [String, RegExp], sources);
  contract('dir', String, dir);
  const _name = isNested ? 'nested' : 'flat';
  return propson(sources, {_name, dir });
}

export { default as convertPropsToFlatJson } from './convertPropsToFlatJson';
export { default as convertPropsToNestedJson } from './convertPropsToNestedJson';
