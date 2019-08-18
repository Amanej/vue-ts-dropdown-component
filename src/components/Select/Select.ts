import { Component, Vue, Prop } from 'vue-property-decorator';

interface Option {
    name: string;
    pris: number;
    id: number;
}

@Component
export default class Select extends Vue {
    @Prop() public options?: Option[];

    public selectedOption: Option = {
        name: '',
        pris: 0,
        id: 0,
    };

    public show: boolean = false;

    public toggleOptions() {
        this.show = !this.show;
    }

    public selectOption(opt: Option) {
        this.selectedOption = opt;
        this.toggleOptions();
    }

    get selected() {
        if (this.selectOption.name) {
            return this.selectOption.name;
        } else {
            return 'Select an item';
        }
    }
}
