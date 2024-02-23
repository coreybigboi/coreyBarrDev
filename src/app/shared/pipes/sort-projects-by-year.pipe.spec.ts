import { SortProjectsByYearPipe } from './sort-projects-by-year.pipe';

describe('SortProjectsByYearPipe', () => {
  it('create an instance', () => {
    const pipe = new SortProjectsByYearPipe();
    expect(pipe).toBeTruthy();
  });
});
