const useSetTab = (tab: number) => {
  sessionStorage.setItem("tab", tab.toString());
};

export default useSetTab;