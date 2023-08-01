import{ validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entuty unit tests', () => {

  it('Should set props and id', () => {
    const props = {prop1: 'prop1', prop2: 2};
    const sut = new StubEntity(props);

    expect(sut.props).toStrictEqual(props);
    expect(sut.id).not.toBeNull();
    expect(uuidValidate(sut.id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = {prop1: 'prop1', prop2: 2};
    const id = 'c2360c6a-72d8-4235-96e2-7fc28db50ad9';
    const sut = new StubEntity(props, id);

    expect(sut.id).toEqual(id);
    expect(uuidValidate(sut.id)).toBeTruthy();
  });

  it('Should convert a entity to a JSON', () => {
    const props = {prop1: 'prop1', prop2: 2};
    const id = 'c2360c6a-72d8-4235-96e2-7fc28db50ad9';
    const sut = new StubEntity(props, id);

    expect(sut.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
