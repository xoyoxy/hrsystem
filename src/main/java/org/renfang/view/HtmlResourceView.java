package org.renfang.view;

import org.springframework.web.servlet.view.InternalResourceView;

import java.io.File;
import java.util.Locale;

public class HtmlResourceView extends InternalResourceView {
    @Override
    public boolean checkResource(Locale locale) {
        File file = new File(this.getServletContext().getRealPath("/") + super.getUrl());
        System.out.println(file.exists());
        return file.exists();// 判断该页面是否存在
    }
}