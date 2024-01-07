export const getInitials = (name: string) => {
  const splitName = name.split(" ");
  const initials = splitName.map((n) => n[0]);
  return initials.join("").toUpperCase();
};
