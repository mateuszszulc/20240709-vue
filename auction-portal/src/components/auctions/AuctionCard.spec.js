import { mount } from '@vue/test-utils'
import AuctionCard from './AuctionCard.vue';

describe('AuctionCard', () => {

    let auction;

    beforeEach(() => {
        auction = {
            id: "",
            title: 'Hello'
        }
    })

    it('should show "Przykład" auction title when no props given', () => {
        const wrapper = mount(AuctionCard)

        const text = wrapper.get('.card-header').text();

        expect(text).toBe('Przykład')
    })

    it('should show given auction title', () => {
        // [A] arrange
        const wrapper = mount(AuctionCard, { props: { auction } })

        // [A] act
        const text = wrapper.get('.card-header').text();

        // [A] assert
        expect(text).toBe('Hello')
    })


    it('should emit given auction (addToCart) when button pressed', () => {
        // [A] arrange
        const wrapper = mount(AuctionCard, { props: { auction } })

        // [A] act
        wrapper.find('button').trigger('click')

        // [A] assert
        expect(wrapper.emitted('addToCart')[0]).toEqual([auction])
    })

})