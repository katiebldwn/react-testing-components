import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Image from '../js/components/image';
import Gallery from '../js/components/gallery';

describe('Image component', function() {
    it('Renders the image and description',  function() {
        const url = "http://www.example.com/image.png";
        const description = "Example description";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

describe('Gallery component', function() {
    it('Renders the images', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Gallery
        images = {
            [{
                url: "www.thinkful.com/logo.jpg",
                description: "thinkful logo"
            }]
        }/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(1);
        const image = result.props.children[0];
        image.props.url.should.equal("www.thinkful.com/logo.jpg");
        image.props.description.should.equal("thinkful logo");
    })
})




