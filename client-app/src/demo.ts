export interface Duck {
    name: string;
    numLeg: number;
    makeSound: (sound: string) => void;
    
}

const duck1: Duck = {
    name: "dack",
    numLeg: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: "dock",
    numLeg: 2,
    makeSound: (sound: any) => console.log(sound)
}
export const ducks = [duck1, duck2]




