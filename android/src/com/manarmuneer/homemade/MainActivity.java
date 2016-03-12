package com.manarmuneer.homemade;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.view.View;

import android.webkit.WebSettings.RenderPriority;

public class MainActivity extends Activity
{
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        WebView webview = new WebView(this);

        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setBuiltInZoomControls(false);
        webview.setScrollbarFadingEnabled(true);

        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setJavaScriptCanOpenWindowsAutomatically(false);
        webview.getSettings().setSupportMultipleWindows(false);
        webview.getSettings().setSupportZoom(false);
        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setSavePassword(false);
        webview.setVerticalScrollBarEnabled(false);
        webview.setHorizontalScrollBarEnabled(false);
        webview.setWebChromeClient(new WebChromeClient());

        webview.loadUrl("file:///android_asset/tempo/index.html");
        //webview.loadUrl("file:///android_asset/freelancer/index.html");
        //webview.loadUrl("file:///android_asset/agency/index.html");
        setContentView(webview);
    }
}
