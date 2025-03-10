package com.web03backend.domain;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.List;

public class CustomOAuth2User implements OAuth2User {
    private OAuth2User oAuth2User;

    public CustomOAuth2User(OAuth2User oAuth2User) {
        this.oAuth2User = oAuth2User;
    }

    @Override
    public String getName() {
        return oAuth2User.getAttribute("name");
    }

    @Override
    public String getAttribute(String name) {
        return oAuth2User.getAttribute(name);
    }

    @Override
    public java.util.Map<String, Object> getAttributes() {
        return oAuth2User.getAttributes();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return oAuth2User.getAuthorities();
    }

    public String getEmail(){
        return oAuth2User.getAttribute("email");
    }

    public String getUsername(){
        return oAuth2User.getAttribute("username");
    }

    public String getPicture(){
        return oAuth2User.getAttribute("picture");
    }
}
