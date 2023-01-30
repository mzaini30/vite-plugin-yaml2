declare module "*.yaml" {
  const value: Record<string, any> | ArrayLike<unknown>;
  export default value;
}
declare module "*.yml" {
  const value: Record<string, any> | ArrayLike<unknown>;
  export default value;
}
