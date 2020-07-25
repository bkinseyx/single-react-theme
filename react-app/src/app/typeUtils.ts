interface TopLevelComponentProps {
  reactConfig?: { [keyof: string]: any };
}

export type TopLevelComponent = React.FC<TopLevelComponentProps>;

export type WithRequired<T, K extends keyof T> = Omit<Partial<T>, K> &
  Required<Pick<T, K>>;

export type WithOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
