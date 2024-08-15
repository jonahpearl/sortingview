import colorsys
import math
import matplotlib.pyplot as plt
import numpy as np

# def rgb_to_hls(r, g, b):
#     return colorsys.rgb_to_hls(r/255, g/255, b/255)

def hex_to_rgb(hex_color):
    return tuple(int(hex_color.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))

def perceived_brightness(rgb):
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255

def get_contrasting_gray(hex_color):
    rgb = hex_to_rgb(hex_color)
    brightness = perceived_brightness(rgb)
    
    # Base gray value starts lighter
    base_gray = 0.7
    
    # Adjust gray based on brightness, but keep it generally light
    if brightness > 0.5:
        gray_value = int(max(0.5, base_gray - (brightness - 0.5) * 0.5) * 255)
    else:
        gray_value = int(min(0.9, base_gray + (0.5 - brightness) * 0.3) * 255)
    
    return f'#{gray_value:02x}{gray_value:02x}{gray_value:02x}'

# Your color list
colors = [
    '#00ff00',
    '#ff00ff',
    '#0080ff',
    '#ff8000',
    '#80bf80',
    '#470ba7',
    '#c80b32',
    '#fd7ee5',
    '#027d30',
    '#00ffff',
    '#00ff80',
    '#9c5a86',
    '#808000',
    '#8ed7fa',
    '#80ff00',
    '#6e52ff',
    '#0000ff',
    '#119c9b',
    '#feb982',
    '#56333d',
    '#fb2b97',
    '#8000ff',
    '#c3f1a2',
    '#b3bd25',
    '#45bc2d',
    '#1c4b88',
    '#49f3c0',
    '#a90c9c',
    '#c436ea',
    '#13055b',
    '#7f93d0',
    '#c4552d',
    '#ee7381',
    '#800000',
    '#58fe60',
    '#4f825e',
    '#21bde8',
    '#d7b8e0',
    '#1e40ee',
    '#324a01',
    '#fc2b03',
    '#723cb9',
    '#3a6ac1',
    '#aef14e',
    '#14c568',
    '#bd9c9b',
    '#f9c506',
    '#b579fa',
    '#810e5e',
    '#b38d4d',
    '#854810',
    '#02ea3a',
    '#0b3b3c',
    '#f90161',
    '#07c304',
    '#fe4c54',
    '#be02ea',
    '#0521bb',
    '#338b05',
    '#4989ff',
    '#52b8b3',
    '#be3271',
    '#f1a441',
    '#0b776b',
    '#0ccfac',
    '#cd61bd',
    '#85fc95',
    '#fe43fe',
    '#bd810d',
    '#cce9e6',
    '#644179',
    '#fedfbe',
    '#80bd00',
    '#99c4bd',
    '#48e5fa',
    '#400626',
    '#bcfc01',
    '#866b3f',
    '#5422e9',
    '#ea03bd',
    '#69809a',
    '#bfca76',
    '#40e60e',
    '#f1da52',
    '#3d5f3b',
    '#63b3f8',
    '#7cd83d',
    '#b52f02',
    '#9364ca',
    '#80a740',
    '#3ce183',
    '#a6a9f6',
    '#fba2bb',
    '#e3763f',
    '#ae3cae',
    '#91414a',
    '#1e94cf',
    '#06f6c9'
]

# Generate contrasting grays
contrasting_grays = [get_contrasting_gray(color) for color in colors]

# Set up the plot
n = len(colors)
cols = math.ceil(math.sqrt(n))
rows = math.ceil(n / cols)

# fig, axs = plt.subplots(rows, cols, figsize=(20, 20))
# fig.subplots_adjust(hspace=0.4, wspace=0.4)

# # Generate example data
# x = np.linspace(0, 2*np.pi, 100)
# y = np.sin(x)

# # Plot each color pair
# for i, (color, gray) in enumerate(zip(colors, contrasting_grays)):
#     row = i // cols
#     col = i % cols
#     ax = axs[row, col] if rows > 1 else axs[col]
    
#     # Set background color (gray)
#     ax.set_facecolor(gray)
    
#     # Plot sine wave
#     ax.plot(x, y, color=color, linewidth=2)
    
#     # Remove axis ticks
#     ax.set_xticks([])
#     ax.set_yticks([])
    
#     # Add color codes as title
#     ax.set_title(f"{color}\n{gray}", fontsize=8)

# # Remove any extra subplots
# for i in range(n, rows*cols):
#     row = i // cols
#     col = i % cols
#     fig.delaxes(axs[row, col] if rows > 1 else axs[col])

# plt.tight_layout()
# plt.show()

# Print results
for color, gray in zip(colors, contrasting_grays):
    print(f"'{color}': '{gray}',")