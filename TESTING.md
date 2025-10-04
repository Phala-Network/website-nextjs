# Testing Guide for Phala Design System Updates

## ✅ Server Status
- Server running at: http://localhost:3000
- Status: ✅ Ready

## 🧪 What to Test

### 1. Montserrat Font Loading
**Test Location**: http://localhost:3000
**What to Check**:
- Open browser developer tools (F12)
- Go to Network tab
- Refresh page
- Look for Montserrat font files loading from Google Fonts
- All text should appear in Montserrat font family

### 2. Hero Section Changes
**Location**: Homepage hero section
**What Changed**:
- Main headline: "The New Cloud for Confidential AI"
- Should use Montserrat font
- Should use darker text color (`#1e2119`)
- Should have `font-display` class applied

### 3. Button Improvements
**Location**: Hero section buttons ("Get started", "Request a demo")
**What Changed**:
- Should use Montserrat font
- Should have `rounded-lg` instead of `rounded-md`
- Should use `font-display` class

### 4. Color Token Integration
**What to Verify**:
- Text should use the new `phala-gray-900` color
- Should be darker/more consistent than before

## 🔍 Browser DevTools Inspection

1. **Font Check**:
   ```
   Right-click on headline → Inspect Element
   Check computed styles → font-family should show "Montserrat"
   ```

2. **Color Check**:
   ```
   Inspect headline → Computed styles → color should be rgb(30, 33, 25)
   ```

3. **Button Check**:
   ```
   Inspect button → Should have border-radius: 8px (rounded-lg)
   ```

## 📱 Visual Testing Checklist

- [ ] Hero headline looks sharper/more professional
- [ ] Text appears in Montserrat font (compare with before)
- [ ] Buttons have slightly more rounded corners
- [ ] Overall typography feels more consistent
- [ ] No broken layouts or styling issues
- [ ] Mobile responsiveness still works

## 🚨 If Something Looks Wrong

If you see issues:
1. Check browser console for font loading errors
2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. Check Network tab for failed font requests
4. Let me know what specific issue you're seeing