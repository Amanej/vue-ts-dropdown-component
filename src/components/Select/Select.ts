import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Select extends Vue {
    @Prop() public options?: object[];
}
