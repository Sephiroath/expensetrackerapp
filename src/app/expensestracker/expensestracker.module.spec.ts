import { ExpensestrackerModule } from './expensestracker.module';

describe('ExpensestrackerModule', () => {
  let expensestrackerModule: ExpensestrackerModule;

  beforeEach(() => {
    expensestrackerModule = new ExpensestrackerModule();
  });

  it('should create an instance', () => {
    expect(expensestrackerModule).toBeTruthy();
  });
});
