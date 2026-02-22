from ultralytics.data.converter import convert_segment_masks_to_yolo_seg

#Convert training annotations
convert_segment_masks_to_yolo_seg(
  masks_dir="plantseg/plantseg/annotations/train",
  output_dir="plantseg/labels/train",
  classes=115
)

#Convert val annotations
convert_segment_masks_to_yolo_seg(
  masks_dir="plantseg/plantseg/annotations/val",
  output_dir="plantseg/labels/val",
  classes=115
)