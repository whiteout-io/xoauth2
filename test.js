'use strict';

var expect = require('chai').expect,
    xoauth2 = require("./index"),
    xoauth2gen;

describe('xoauth', function() {
    //TODO: mock http and https with sinon to create real unit tests

    it('should get a token', function(done) {
        xoauth2gen = xoauth2.createXOAuth2Generator({
            user: "user@gmail.com",
            clientId: "{Client ID}",
            clientSecret: "{Client Secret}",
            refreshToken: "{User Refresh Token}",
            accessToken: "{User Refresh Token}",
            timeout: 3600
        });

        // SMTP/IMAP
        xoauth2gen.getToken(function(err, token) {
            expect(err).to.be.null;
            expect(token).to.be.ok;
            done();
        });
    });
});