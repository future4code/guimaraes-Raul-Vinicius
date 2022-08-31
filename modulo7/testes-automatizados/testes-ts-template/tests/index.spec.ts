import exp from "constants";
import { isEven, login, myAsyncFunc } from "../src";

describe.skip("Teste na função isEven", () => {
  test("Retorna true para n=4", () => {
    const result = isEven(4);
    expect(result).toBe(true);
  });

  test("Retorna false para n=5", () => {
    const result = isEven(5);
    expect(result).toBe(false);
  });

  test("retorna false pra n=4.5", () => {
    const result = isEven(4.5);
    expect(result).toBe(false);
  });
});

describe.skip("teste dos matchers", () => {
  it("toBe/ToEqual", () => {
    const result = [1, 2, 3];
    // expect(result).toBe([1,2,3])
    expect(result).toEqual([1, 2, 3]);
  });

  it("toBeGreaterThan/orEqual", () => {
    const result = 5;
    expect(result).toBeGreaterThan(0);
    expect(result).toBeGreaterThanOrEqual(5);
  });

  it("toBeLessThan/orEqual", () => {
    const result = -5;
    expect(result).toBeLessThan(0);
    expect(result).toBeLessThanOrEqual(-5);
  });

  it("toContain", () => {
    const result = [1, "dois", true];
    expect(result).toContain("dois");
    expect(result).toContain(true);
  });

  it("toContainEqual", () => {
    const result = [1, "dois", { name: "teste" }];
    expect(result).toContainEqual({ name: "teste" });
  });

  it("not", () => {
    const result = [1, "dois", { name: "teste" }];
    expect(result).not.toContainEqual({ name: "bananinha" });
  });
});

describe.skip("função async", () => {
  beforeAll(() => {}); // excuta antes dos testes
  afterAll(() => {}); // excuta depois dos testes

  test("async", async () => {
    const result = await myAsyncFunc();
    expect(result).toBe("response");
  });
});

describe("função login", () => {
  it("Login feito com sucesso", async () => {
    expect.assertions(1);
    try {
      const result = await login("senha correta");
      expect(result).toEqual({
        id: 1,
        name: "teste",
      });
    } catch (error: any) {}
  });

  it("Login feito com senha errada", async () => {
    expect.assertions(3);
    try {
      await login("senha incorreta");
    } catch (error: any) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("A senha está incorreta");
    }
  });
});
