export declare function useData(initialData?: any[]): {
    get: () => any[];
    set: (value: any) => void;
    reset: (value: any) => void;
    push: (value: any) => any;
    pop: () => any;
    removeByValue: (value: any) => void;
};
export default useData;
